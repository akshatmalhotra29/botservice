let sendBotResponse={};

sendBotResponse.sendTextReply=function (res, msg) {
	res.send({
		replies: [{
			type: 'text',
			content: msg
		}],
		conversation: {
			memory: {
				key: "Null"
			}
		}
	});
};

sendBotResponse.sendCardsReply=function(res, card_title, card_sub_title, image_url, button_title, button_type, button_value, memkey) {
	res.send({
		replies: [{
			type: "card",
			content: {
				title: card_title,
				subtitle: card_sub_title,
				imageUrl: image_url,
				buttons: [{
					title: button_title,
					type: button_type,
					value: button_value
				}]
			}
		}],
		conversation: {
			memory: {
				key: memkey
			}
		}
	});
};

sendBotResponse.sendQuickReply=function(res, msg, memkey) {
	res.send({
		replies: [{
			type: "quickReplies",
			content: {
				title: msg,
				buttons: [{
					title: "Yes",
					value: "Yes"
				}, {
					title: "No",
					value: "No"
				}]
			}
		}],
		conversation: {
			memory: {
				key: memkey
			}
		}
	});
};

sendBotResponse.sendButtonReply=function(res, msg, title, linkvalue) {
	res.send({
		replies: [{
			type: 'buttons',
			content: {
				title: msg,
				buttons: [{
					title: title,
					type: "web_url",
					value: linkvalue
				}]
			}
		}],
		conversation: {
			memory: {
				key: "Null"
			}
		}
	});
};
module.exports = sendBotResponse;