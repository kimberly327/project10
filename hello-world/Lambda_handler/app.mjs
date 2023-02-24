

const handler = async (event) => {

  if (event.triggerSource === "CustomMessage_SignUp") {
    const message = `La tua registrazione è andata a buon fine. Il tuo codice di conferma è ${event.request.codeParameter}.`;
    event.response.smsMessage = message;
    event.response.emailMessage = message;
    event.response.emailSubject = "Benvenuto!";
  }
  if (event.triggerSource === "CustomMessage_ResendCode") {
    const message = `Il tuo codice di conferma è ${event.request.codeParameter}.`;
    event.response.smsMessage = message;
    event.response.emailMessage = message;
    event.response.emailSubject = "Recupero del codice di conferma!";
  }
  if (event.triggerSource === "CustomMessage_AdminCreateUser") {
    const message = `Benvenuto nel servizio. Il tuo username è ${event.request.usernameParameter}. La tua password temporanea è ${event.request.codeParameter}`;
    event.response.smsMessage = message;
    event.response.emailMessage = message;
    event.response.emailSubject = "Benvenuto!";
  }
  if (event.triggerSource === "CustomMessage_ForgotPassword") {
    const message = `La tua password temporanea è ${event.request.codeParameter}`;
    event.response.smsMessage = message;
    event.response.emailMessage = message;
    event.response.emailSubject = "Recupero Password";
  }

  console.log(event);
  
  return event;
};

export { handler }