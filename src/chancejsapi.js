module.exports = {
    'bool': {
        type: Boolean,
        args: {
            'likelihood': {
                type: Number
            }
        }
    },
    'character': {
        type: String,
        args: {
            'pool': {
                type: String
            },
            'alpha': {
                type: Boolean
            },
            'casing': {
                options: ['upper', 'lower']
            },
            'symbols': {
                type: Boolean
            }
        }
    },
    'floating': {
        type: Number,
        args: {
            'fixed': {
                type: Number
            },
            'min': {
                type: Number
            },
            'max': {
                type: Number
            }
        }
    },
    'integer': {
        type: Number,
        args: {
            'min': {
                type: Number
            },
            'max': {
                type: Number
            }
        }
    },
    'natural': {
        type: Number,
        args: {
            'min': {
                type: Number
            },
            'max': {
                type: Number
            }
        }
    },
    'string': {
        type: String,
        args: {
            'length': {
                type: Number
            },
            'pool': {
                type: String
            }
        }
    },
    'paragraph': {
        type: String,
        args: {
            'sentences': {
                type: Number
            }
        }
    },
    'sentence': {
        type: String,
        args: {
            'words': {
                type: Number
            }
        }
    },
    'syllable': {
        type: String
    },
    'word': {
        type: String,
        args: {
            'syllables': {
                type: Number
            },
            'length': {
                type: Number
            }
        }
    },
    'age': {
        type: Number,
        args: {
            'type': {
                options: ['child', 'teen', 'adult', 'senior']
            }
        }
    },
    'birthday': {
        type: Date,
        args: {
            'string': {
                type: Boolean
            },
            'type': {
                options: ['child', 'teen', 'adult', 'senior']
            },
            'american': {
                type: Boolean
            }
        }
    },
    'cpf': {
        type: String,
    },
    'first': {
        type: String,
        args: {
            'gender': {
                options: ['male', 'female']
            }
        }
    },
    'gender': {
        type: String,
    },
    'last': {
        type: String,
    },
    'name': {
        type: String,
        args: {
            'middle': {
                type: Boolean
            },
            'middle_initial': {
                type: Boolean
            },
            'prefix': {
                type: Boolean
            }
        }
    },
    'prefix': {
        type: String,
        args: {
            'full': {
                type: Boolean
            },
            'gender': {
                options: ['male', 'female']
            }
        }
    },
    'ssn': {
        type: String,
        args: {
            'ssnFour': {
                type: Boolean
            }
        }
    },
    'suffix': {
        type: String,
        args: {
            'full': {
                type: Boolean
            }
        }
    },
    'android_id': {
        type: String
    },
    'apple_token': {
        type: String
    },
    'bb_pin': {
        type: String
    },
    'wp7_anid': {
        type: String
    },
    'wp8_anid2': {
        type: String
    },
    'color': {
        type: String,
        args: {
            'format': {
                options: ['hex', 'shorthex', 'rgb', '0x']
            },
            'grayscale': {
                type: Boolean
            },
            'casing': {
                options: ['upper', 'lower']
            }
        }
    },
    'domain': {
        type: String,
        args: {
            'tld': {
                type: String
            }
        }
    },
    'email': {
        type: String,
        args: {
            'domain': {
                type: String
            }
        }
    },
    'fbid': {
        type: String
    },
    'google_analytics': {
        type: String
    },
    'hashtag': {
        type: String
    },
    'ip': {
        type: String
    },
    'ipv6': {
        type: String
    },
    'klout': {
        type: Number
    },
    'tld': {
        type: String
    },
    'twitter': {
        type: String
    },
    'url': {
        type: String,
        args: {
            'domain': {
                type: String
            },
            'path': {
                type: String
            }
        }
    },
    'address': {
        type: String,
        args: {
            'short_suffix': {
                type: Boolean
            }
        }
    },
    'altitude': {
        type: Number,
        args: {
            'fixed': {
                type: Number
            },
            'max': {
                type: Number
            }
        }
    },
    'areacode': {
        type: String
    },
    'city': {
        type: String
    },
    'coordinates': {
        type: String,
        args: {
            'fixed': {
                type: Number,
            }
        }
    },
    'country': {
        type: String,
        args: {
            'full': {
                type: Boolean
            }
        }
    },
    'depth': {
        type: Number,
        args: {
            'fixed': {
                type: Number,
            },
            'min': {
                type: Number
            }
        }
    },
    'geohash': {
        type: String,
        args: {
            'length': {
                type: Number
            }
        }
    },
    'latitude': {
        type: Number,
        args: {
            'fixed': {
                type: Number,
            }
        }
    },
    'longitude': {
        type: Number,
        args: {
            'fixed': {
                type: Number,
            }
        }
    },
    'phone': {
        type: String,
        args: {
            'country': {
                options: ['us', 'uk', 'fr']
            },
            'mobile': {
                type: Boolean
            }
        }
    },
    'postal': {
        type: String
    },
    'province': {
        type: String,
        args: {
            'full': {
                type: Boolean
            }
        }
    },
    'state': {
        type: String,
        args: {
            'full': {
                type: Boolean
            },
            'territories': {
                type: Boolean
            },
            'armed_forces': {
                type: Boolean
            },
            'us_states_and_dc': {
                type: Boolean
            }
        }
    },
    'street': {
        type: String,
        args: {
            'short_suffix': {
                type: Boolean
            }
        }
    },
    'zip': {
        type: String,
        args: {
            'plusfour': {
                type: Boolean
            }
        }
    },
    'ampm': {
        type: String
    },
    'date': {
        type: Date,
        args: {
            'string': {
                type: Boolean
            },
            'year': {
                type: Number
            },
            'month': {
                type: Number
            },
            'day': {
                type: Number
            },
            'american': {
                type: Boolean
            }
        }
    },
    'hammertime': {
        type: Number
    },
    'hour': {
        type: Number,
        args: {
            'twentyfour': {
                type: Boolean
            }
        }
    },
    'millisecond': {
        type: Number
    },
    'minute': {
        type: Number
    },
    'month': {
        type: String
    },
    'second': {
        type: Number
    },
    'timestamp': {
        type: Number
    },
    'year': {
        type: String,
        args: {
            'min': {
                type: Number
            },
            'max': {
                type: Number
            }
        }
    },
    'cc': {
        type: String,
        args: {
            'type': {
                options: [
                    'American Express',
                    'Bankcard',
                    'China UnionPay',
                    'Diners Club Carte Blanche',
                    'Diners Club enRoute',
                    'Diners Club International',
                    'Diners Club United States & Canada',
                    'Discover Card',
                    'InstaPayment',
                    'JCB',
                    'Laser',
                    'Maestro',
                    'Mastercard',
                    'Solo',
                    'Switch',
                    'Visa',
                    'Visa Electron'
                ]
            }
        }
    },
    'cc_type': {
        type: String
    },
    'dollar': {
        type: String,
        args: {
            'max': {
                type: Number
            }
        }
    },
    'exp': {
        type: String
    },
    'exp_month': {
        type: String,
        args: {
            'future': {
                type: Boolean
            }
        }
    },
    'exp_year': {
        type: String
    },
    'pick': {
        type: String
    },
    'guid': {
        type: String
    },
    'hash': {
        type: String,
        args: {
            'length': {
                type: Number
            },
            'casing': {
                options: ['upper', 'lower']
            }
        }
    },
    'normal': {
        type: Number,
        args: {
            'mean': {
                type: Number
            },
            'dev': {
                type: Number
            }
        }
    },
    'radio': {
        type: String,
        args: {
            'side': {
                options: ['east', 'west']
            }
        }
    },
    'tv': {
        type: String,
        args: {
            'side': {
                options: ['east', 'west']
            }
        }
    }
};
