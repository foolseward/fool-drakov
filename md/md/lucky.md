FORMAT: 1A

# 签到抽奖

## 获取所有奖品的展示信息 [GET /api/com/turntable]

+ Response 200 (application/json;charset=UTF-8)

    + Body

        {
            "msgCode": 1000,
            "msgText": "123",
            "data": {
                "count|0-100": 100,
                "continuity_daya|1": [7, 8, 14, 15, 29, 30, 36],
                "continuity_day|0-40": 40,
                "prize":[
                    {
                           "id": 1,
                           "name": "奖品一",
                           "img_url": "http://qiniu.17lvju.com/images/077f4c85733faddce84c6a85a2879cee.png",
                           "prize_level": 1
                    },
                    {
                           "id": 2,
                           "name": "奖品二",
                           "img_url": "http://qiniu.17lvju.com/images/6acb134408f372bd0fffc07232c73c89.png",
                           "prize_level": 2
                    },
                    {
                           "id": 1,
                           "name": "奖品一",
                           "img_url": "http://qiniu.17lvju.com/images/077f4c85733faddce84c6a85a2879cee.png",
                           "prize_level": 1
                    },
                    {
                           "id": 2,
                           "name": "奖品二",
                           "img_url": "http://qiniu.17lvju.com/images/6acb134408f372bd0fffc07232c73c89.png",
                           "prize_level": 2
                    },
                    {
                           "id": 1,
                           "name": "奖品一",
                           "img_url": "http://qiniu.17lvju.com/images/077f4c85733faddce84c6a85a2879cee.png",
                           "prize_level": 1
                    },
                    {
                           "id": 2,
                           "name": "奖品二",
                           "img_url": "http://qiniu.17lvju.com/images/6acb134408f372bd0fffc07232c73c89.png",
                           "prize_level": 2
                    },
                    {
                           "id": 1,
                           "name": "奖品一",
                           "img_url": "http://qiniu.17lvju.com/images/077f4c85733faddce84c6a85a2879cee.png",
                           "prize_level": 1
                    },
                    {
                           "id": 3,
                           "name": "奖品三",
                           "img_url": "http://qiniu.17lvju.com/images/96528fa48fde7c6b32b56605ffde4967.png",
                           "prize_level": 3
                    }
                ]
            }
        }
    
    + Schema

        {
            show: [Boolean] true的时候，中奖信息会出现在广播中， 空奖小米之类的就不要出现在广播中了
        }


# 签到抽奖

## 加载页中奖名单 [/api/com/winningList]

### 加载页中奖名单 [GET]

+ Response 200 (application/json;charset=UTF-8)

    + Body

        {
            "msgCode": 1000,
            "msgText": "aasdfasdfasdfasdf",
            "data|0-100": [
                {
                    "mobile|1": ["13888888888", "13999999999", "15777777777"],
                    "name|1": ["奖品一", "奖品二", "奖品三", "奖品四", "奖品五", "奖品六", "奖品七"]
                }
            ]
        }


## 抽奖动作 [/api/com/prizeDraw]

### 抽奖动作 [GET]

+ Response 200 (application/json;charset=UTF-8)

    + Body

        {
            "msgCode": "1000",
            "msgText": "查询成功",
            "data":
            {
                "id|1": [1, 2, 3],
                "name": "@date(\"1989-MM-dd\")",
                "odds": "30.00",
                "stock": 999965,
                "type": 5,
                "table_type": 1
            }
        }


## 中奖纪录 [/api/com/record]

### 中奖纪录 [GET]

+ Response 200 (application/json;charset=UTF-8)

    + Body

        {
            "msgCode": "1000",
            "msgText": "查询成功",
            "data":{
                "data|10":[
                    {
                        "date": "2019-01-09 16:22:58",
                        "name|1": ["奖品一", "奖品二", "奖品三", "奖品四", "奖品五", "奖品六", "奖品七"]
                    }
                ],
                "current_page": 1,
                "last_page": 4,
                "total": 11
            }
        }

### 允许跨域 [OPTIONS]

+ Response 200
    + Headers

            Access-Control-Allow-Origin: *