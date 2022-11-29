export const getCerts = () => {
  SignerDemtra.getCerts({ action: "getCerts" }).then(function (res) {
    var r = JSON.parse(res.result);
    if (res.isValid) {
      return r.Tokens;
    }
  });
};

export const sign = (tokenSerial, tokenPin, originalDocument) => {
  SignerDemtra.signJson({
    action: "Sign",
    tokenSerial,
    tokenPin,
    originalDocument,
  }).then(function (res) {
    var r = JSON.parse(res.result);
    if (res.isValid) {
      var sD = JSON.parse(r.DocumentToSend);
      res
        .status(200)
        return sD.documents[0].signatures[0].value;
    } 
  });
};
