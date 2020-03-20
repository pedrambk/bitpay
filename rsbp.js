(function (RSBP_CONFIG, window) {

  "use strict";

  var getQueryStringValue = function (name) {
    var results = new RegExp("[\?&]" + name + "=([^&#]*)").exec(window.location.href);
    if (results !== null){
      return results[1].replace("/", "") || 0;
    } else {
      return null;
    }
  };

  var loadMerchantConfiguration = function () {
    var urlConfig = RSBP_CONFIG.system.urlConfig;
    var config = {
      "name": (urlConfig ? getQueryStringValue("name") : RSBP_CONFIG.payee.name) || "pedram",
      "address": (urlConfig ? getQueryStringValue("address") : RSBP_CONFIG.payee.address) || "1NWYC2iqCcuZeoN4oTNbNeCWMxHjP7hjyJ",
      "currency": (urlConfig ? getQueryStringValue("currency") : RSBP_CONFIG.payee.currency) || "BTC",
      "amount": (urlConfig ? getQueryStringValue("amount") : 0) || 0,
      "discount": (urlConfig ? getQueryStringValue("discount") : RSBP_CONFIG.payee.discount) || 0
    };
    config.discount = config.discount / 100;
    return config;
  };

  RSBP_CONFIG.payee = loadMerchantConfiguration();

}(RSBP_CONFIG, window));
