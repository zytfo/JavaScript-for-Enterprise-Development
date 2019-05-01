import { reducer } from '../redux/reducers';

test('reducer for ITEMS_LIST_LOADED action', () => {
    let state;
    state = reducer({ data: [], dataLoadingFailed: false }, {
        type: 'ITEMS_LIST_LOADED', data: [
            {
                "69_11040543": {
                    "actions": {
                        "0": {
                            "link": "http://wiki.teamfortress.com/scripts/itemredirect.php?id=60&lang=ru_RU",
                            "name": "Статья в вики"
                        }
                    },
                    "app_date": {
                        "def_index": "60",
                        "quality": "6"
                    },
                    "app_data": "440",
                    "background_color": "3C352E",
                    "classid": "69",
                    "commodity": 0,
                    "descriptions": {
                        "0": {
                            "value": "Тип невидимости: Реакция на движение. Доп. атака: Уйти в невидимость. В невидимости нельзя атаковать, а столкновение с врагом сделает ваш силуэт видимым. Расход заряда невидимости зависит от скорости передвижения."
                        },
                        "1": {
                            "color": "7ea9d1",
                            "value": "Восстановление невидимости: +100%"
                        },
                        "2": {
                            "color": "d83636",
                            "value": "В невидимости заряд часов не пополняется."
                        },
                        "3": {
                            "color": "d83636",
                            "value": "-35% заряда невидимости от боеприпасов."
                        },
                        "4": {
                            "value": " "
                        },
                        "5": {
                            "value": "(За достижения: нельзя обменять или продать)"
                        }
                    },
                    "icon_drag_url": "",
                    "icon_url": "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwsUXA_qvSp8n8nyDvqzBOESnN974JQBiWA_kgd4YbrjNW41c1aSUaEKDKFipVu-WSFj7JQzUIHup-wEeRKv6tVDBt05jw",
                    "icon_url_large": "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwsUXA_qvSp8n8nyDvqzBOESnN974JQBiWA_kgd4YbrjNW41c1aSUaEKDKFipVu-WSFj7JQzUIHup-wEeRKv6tVDBt05jw",
                    "instanceid": "11040543",
                    "market_hash_name": "The Cloak and Dagger",
                    "market_marketable_restriction": "0",
                    "market_name": "Плащ и кинжал ",
                    "market_tradable_restriction": "7",
                    "marketable": 0,
                    "name": "Плащ и кинжал ",
                    "name_color": "7D6D00",
                    "tags": {
                        "0": {
                            "category": "Quality",
                            "category_name": "Качество",
                            "color": "7D6D00",
                            "internal_name": "Unique",
                            "name": "уникальный"
                        },
                        "1": {
                            "category": "Type",
                            "category_name": "Тип",
                            "internal_name": "pda2",
                            "name": "Дополнительный КПК"
                        },
                        "2": {
                            "category": "Class",
                            "category_name": "Класс",
                            "internal_name": "Spy",
                            "name": "Spy"
                        }
                    },
                    "tradable": 0,
                    "type": "Часы невидимости 5-го уровня"
                }
            }]
    });
    expect(state).toMatchSnapshot()
});