FORMAT: 1A

# 签到
签到抽奖页面

## 签到首页 [/dailySign]
![](./1.png)

### 签到首页 [POST]

+ Request (application/x-www-form-urlencoded;charset=UTF-8)

    + Body

            user_id=3562

+ Response 200 (application/json;charset=UTF-8)
    + Body 
    
        {
            "msgCode": 1000,
            "msgText": 123,
            "data": {
                "snail": 10,
                "status": 1, 
                "continuity_day": 15,
                "sign_rule": "http://qiniu.17lvju.com/images/20181115134837.png",
                "h5_url": "http://qiniu.17lvju.com/images/20181115134837.png",
                "list": [
                    {
                        "id": 1,
                        "type": 1,
                        "img_url": "http://qiniu.17lvju.com/images/20181115134837.png",
                        "title": "上山打老虎",
                        "current_num": 100,
                        "price": 1000,
                        "snail": 500
                    }
                ]
            }
        }
    
    + Schema

        {
            head_url: '头像地址',
            data: {
                status: 1已签到 2未签到
            }
        }

### Allow cross site origin [OPTIONS]

+ Response 200
    + Headers

            Access-Control-Allow-Origin: *