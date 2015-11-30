var _ = require('lodash'),
    jQuery = require('jquery'),
    chancejsApi = require('./chancejsapi');

var fillOptions = [
    {
        name: 'allowBlank',
        label: 'Allow Blank Fields?',
        initial: false
    },
    {
        name: 'allowMultiple',
        label: 'Allow Multiple Selections?',
        initial: true
    },
    {
        name: 'overwrite',
        label: 'Overwrite Fields?',
        initial: false
    }
];

var elementChoices = [
    ['', '----'],
    ['input[type=color]', 'Color'],
    ['input[type=date]', 'Date'],
    ['input[type=datetime-local]', 'Local Date'],
    ['input[type=email]', 'Email'],
    ['input[type=month]', 'Month'],
    ['input[type=number]', 'Number'],
    ['input[type=password]', 'Password'],
    ['input[type=range]', 'Number Range'],
    ['input[type=search]', 'Search'],
    ['input[type=tel]', 'Telephone'],
    ['input[type=text]', 'Text'],
    ['input[type=time]', 'Time'],
    ['input[type=url]', 'URL'],
    ['input[type=week]', 'Week'],
    ['input[type=checkbox]', 'Checkbox'],       // allowMultiple
    ['input[type=radio]', 'Radio Button'],
    ['select[multiple]', 'Multiple Select'],    // allowMultiple
    ['select', 'Select'],
    ['textarea', 'Text Area'],
    ['custom', 'Custom']
];

var selectorChoices = [
    ['', '----'],
    ['.', 'Class'],
    ['#', 'ID'],
    ['custom', 'Custom']
];

var booleanFieldTemplate = require('./templates/boolean-field.hbs');
var choiceFieldTemplate = require('./templates/choice-field.hbs');


jQuery(function($) {
    function save() {
        window.chrome.storage.sync.set({
            formfiller: $('form').serializeArray(),
        }, function() {
            console.log('saved');
        });
    }

    function restore() {
    }

    var container = $('<form>').appendTo(document.body);

    container.append('<h2>Global Options</h2>');
    container.append(function(index, html) {
        return _.map(fillOptions, function(obj, index) {
            return booleanFieldTemplate(obj);
        });
    });

    container.append('<h2>Field Options</h2>');

    $(choiceFieldTemplate({
        name: 'element',
        label: 'Element Type',
        choices: elementChoices
    }))
    .appendTo(container)
    .on('change', function(event) {
        var value = $(event.target).val();

        if (value) {
            if (!$(event.target).next('button')) {
                $(this).append('<button>Add Selector</button>');
            }
        }
        if (value == 'custom') {
            // add text field
        }
    })

    container.append('<button>Add</button>');

    $(':input', container).on('change', save);
});
