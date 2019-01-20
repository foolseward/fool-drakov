FORMAT: 1A

# 签到
签到抽奖页面

## 签到首页 [/dailySign]

### 签到首页 [POST]

+ Request (application/json;charset=UTF-8)

    + Body

            {
                "user_id": "asdfasdfasd"
            }
    
    + Schema

            {
                "type": "object",
                "properties": {
                    "user_id": {
                        "type": "number"
                    }
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Body 
    
        {
            "msgCode": 1000,
            "msgText": 123,
            "data": {
                "snail": 10,
                "status": 1, 
                "continuity_day": 5,
                "sign_rule": "http://qiniu.17lvju.com/images/20181115134837.png",
                "h5_url": "http://qiniu.17lvju.com/images/20181115134837.png",
                "list": [
                    {
                        "id": 1,
                        "type": 1,
                        "img_url": "http://img5.imgtn.bdimg.com/it/u=2189972113,381634258&fm=26&gp=0.jpg",
                        "title": "上山打老虎上山打老虎上山打老虎上山打老虎上山打老虎上山打老虎上山打老虎上山打老虎",
                        "current_num": 100,
                        "price": 1000,
                        "snail": 500
                    },
                    {
                        "id": 1,
                        "type": 1,
                        "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546579515763&di=fc7150468d571af1ef850594a66a08f8&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F67b2eab9ly1fm6xttlbjpj20dw0dwmyv.jpg",
                        "title": "上山打老虎",
                        "current_num": 100,
                        "price": 0,
                        "snail": 500
                    },
                    {
                        "id": 1,
                        "type": 1,
                        "img_url": "http://img5.imgtn.bdimg.com/it/u=2189972113,381634258&fm=26&gp=0.jpg",
                        "title": "上山打老虎",
                        "current_num": 0,
                        "price": 1000,
                        "snail": 500
                    },
                    {
                        "id": 1,
                        "type": 1,
                        "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546579500769&di=956b2e50e193feba65552b01a423716f&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140922%2F18572030_101647452000_2.jpg",
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