[
	"id": '1',
	"name": '文件夹1',
	"description": '',
	"sum": "4",
	"item": [
		{
			"id": '1-1',
			"name": '子文件夹1-1',
			"description":'这是描述1-1',
			"item": [
				{
					"name": "测试",
					"request": {
						"url": "http://localhost:9012/post",
						"method": "POST",
						"header": [
							{
								"key": "Host",
								"value": "gank.io",
								"description": ""
							},
							{
								"key": "X-Amz-Date",
								"value": "20171219T033635Z",
								"description": ""
							},
							{
								"key": "Authorization",
								"value": "AWS4-HMAC-SHA256 Credential=/20171219/us-east-1/execute-api/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=8ba5cb90a0c6b9bc2d93a06ee447c57d62846f7e4808f92d36ae9d34c6e5f4d1",
								"description": ""
							},
							{
								"key": "Content-Type",
								"value": "application/json",
								"description": ""
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n\t\"id\": 6,\r\n\t\"title\": \"我是新加入的新闻\",\r\n\t\"date\": \"2016-08-12\",\r\n\t\"likes\": 0,\r\n\t\"views\": 0\r\n}"
						},
						"description": ""
					},
					"response": []
				}
			]
		},
		{
			"id": '1-2',
			"name": '子文件夹1-2',
			"description":'这是描述1-2'
		}
	]
]