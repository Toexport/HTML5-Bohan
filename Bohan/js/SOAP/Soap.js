var USERTOKEN = $.cookie('userToken');
var req = RequestByToken(USERTOKEN);

function RequestByToken(AToken) {
	console.log('Param:'+AToken);
var dataXML = '<?xml version="1.0" encoding="utf-8"?>'; 
dataXML = dataXML +'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; 
dataXML = dataXML +'  <soap:Header>' 
                  +'<Certificate xmlns="http://bohansever.top/">'
                  +'<token>'+AToken+'</token>' 
                  +'<language>simple-chinese</language>'
                  +'</Certificate>' 
                  +'</soap:Header>';
dataXML = dataXML +'<soap:Body>'
                  +'<GetUserDeviceList xmlns="http://bohansever.top/" />' 
                  + '</soap:Body>'; 
dataXML = dataXML + '</soap:Envelope>';
}