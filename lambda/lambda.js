/* This code has been generated from your interaction model by skillinator.io

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the contents as the code for a new Lambda function, using the alexa-skill-kit-sdk-factskill template.
// This code includes helper functions for compatibility with versions of the SDK prior to 1.0.9, which includes the dialog directives.



 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function


let speechOutput;
let reprompt;
let welcomeOutput = "Welcome to eco buddy. I can help you with bank queries like account balance, submitting cheque to bank, updating passbook, updating KYC and many more. What would you like to try ?.";
let welcomeReprompt = welcomeOutput;
// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
speechOutput = '';
const handlers = {
	'LaunchRequest': function () {
		this.emit(':ask', welcomeOutput, welcomeReprompt);
	},
	'AMAZON.HelpIntent': function () {
		speechOutput = welcomeOutput;
		reprompt = welcomeOutput;
		this.emit(':ask', speechOutput, reprompt);
	},
   'AMAZON.CancelIntent': function () {
		speechOutput = 'Thank you for reaching to us. See you again';
		this.emit(':tell', speechOutput);
	},
   'AMAZON.StopIntent': function () {
		speechOutput = 'Thank you for reaching to us. See you again';
		this.emit(':tell', speechOutput);
   },
   'SessionEndedRequest': function () {
		speechOutput = 'Thank you for reaching to us. See you again';
		//this.emit(':saveState', true);//uncomment to save attributes to db on session end
		this.emit(':tell', speechOutput);
   },
	'AMAZON.FallbackIntent': function () {
		speechOutput = welcomeOutput;

		//any intent slot variables are listed here for convenience

		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.NavigateHomeIntent': function () {
		speechOutput = welcomeOutput;

		//any intent slot variables are listed here for convenience

		this.emit(":ask", speechOutput, speechOutput);
    },
	'getAccountBalanceIntent': function () {
		//delegate to Alexa to collect all the required slot values
       let filledSlots = delegateSlotCollection.call(this);
		speechOutput = '';
		//any intent slot variables are listed here for convenience

		let accountTypeSlotRaw = this.event.request.intent.slots.accountType.value;
		console.log(accountTypeSlotRaw);
		let accountTypeSlot = resolveCanonical(this.event.request.intent.slots.accountType);
		console.log(accountTypeSlot);

		//Your custom intent handling goes here
		speechOutput = "Okay. Your account balance is 3 Lakhs in rupees. What else would you like to do ?";
		this.emit(':ask', speechOutput, speechOutput);
	},
	'submitChequeIntent': function () {
		//delegate to Alexa to collect all the required slot values
       let filledSlots = delegateSlotCollection.call(this);
		speechOutput = '';
		//any intent slot variables are listed here for convenience

		let bankNameSlotRaw = this.event.request.intent.slots.bankName.value;
		console.log(bankNameSlotRaw);
		let bankNameSlot = resolveCanonical(this.event.request.intent.slots.bankName);
		console.log(bankNameSlot);

		//Your custom intent handling goes here
		speechOutput = "Okay. I am logging your ticket with " +bankNameSlotRaw +" bank for the cheque collection from your home. Your ticket number is 12345. A representative will connect with you shortly. What else would you like to do?";
		this.emit(':ask', speechOutput, speechOutput);
	},
	'updatePassbookIntent': function () {
		//delegate to Alexa to collect all the required slot values
       let filledSlots = delegateSlotCollection.call(this);
		speechOutput = '';
		//any intent slot variables are listed here for convenience

		let bankNameNewSlotRaw = this.event.request.intent.slots.bankNameNew.value;
		console.log(bankNameNewSlotRaw);
		let bankNameNewSlot = resolveCanonical(this.event.request.intent.slots.bankNameNew);
		console.log(bankNameNewSlot);

		//Your custom intent handling goes here
		speechOutput = "Okay. I am logging your ticket with " +bankNameNewSlotRaw +"  bank for passbook. You ticket number is 23456. A representative will connect with you shortly. What else would you like to perform?";
		this.emit(':ask', speechOutput, speechOutput);
	},
	'updateKYCIntent': function () {
		//delegate to Alexa to collect all the required slot values
       let filledSlots = delegateSlotCollection.call(this);
		speechOutput = '';
		//any intent slot variables are listed here for convenience

		let bankSlotRaw = this.event.request.intent.slots.bank.value;
		console.log(bankSlotRaw);
		let bankSlot = resolveCanonical(this.event.request.intent.slots.bank);
		console.log(bankSlot);
		let documentSlotRaw = this.event.request.intent.slots.document.value;
		console.log(documentSlotRaw);
		let documentSlot = resolveCanonical(this.event.request.intent.slots.document);
		console.log(documentSlot);

		//Your custom intent handling goes here
		speechOutput = "Okay. I am logging your ticket with " +bankSlotRaw +" bank for KYC update. You ticket number is 34567. A representative will connect with you shortly. Anything else would you like to do ?";
		this.emit(':ask', speechOutput, speechOutput);
	},	
	'pharmacyCallBackIntent': function () {
		//delegate to Alexa to collect all the required slot values
       let filledSlots = delegateSlotCollection.call(this);
		speechOutput1 = '';
		//any intent slot variables are listed here for convenience

		let PharmacyName = this.event.request.intent.slots.PharmacyName.value;
		let confirmationStatus = this.event.request.intent.slots.PharmacyName.confirmationStatus;
		//console.log(bankNameNewSlotRaw);
		//let bankNameNewSlot = resolveCanonical(this.event.request.intent.slots.bankNameNew);
		//console.log(bankNameNewSlot);
		
		
/*		
		    if (!slots.mobileNumber.value) {
      const slotToElicit = 'PharmacyName';
      const speechOutput = 'What is the mobile Number?';
      const repromptSpeech = 'Please tell me the mobile Number';
      return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
    }
    else if (slots.PharmacyName.confirmationStatus !== 'CONFIRMED') {

      if (slots.PharmacyName.confirmationStatus !== 'DENIED') {
        // slot status: unconfirmed
        const PharmacyName = slots.PharmacyName.value;                         
        const slotToConfirm = 'PharmacyName';
        const speechOutput = "The mobile Number is " + getRandomSymbolSpeech(PharmacyName) + " , correct?";
        const repromptSpeech = speechOutput;
        return this.emit(':confirmSlot', slotToConfirm, speechOutput, repromptSpeech);
      }

      // slot status: denied -> reprompt for slot data
      const slotToElicit = 'PharmacyName';
      const speechOutput = 'What is the mobile Number on which you want to get reminders ?';
      const repromptSpeech = 'Please tell me the mobile Number';
      return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
}   
*/  
        if (confirmationStatus == 'NONE') {                               
        const slotToConfirm = 'PharmacyName';
        const speechOutput = "Okay. Searching the nearby medical stores <break time='5s'/> I found an Apollo Pharmacy store near you which can deliver your medicines in 30 minutes at your home. Should I raise a request for call back from Apollo Pharmacy?";
        const repromptSpeech = speechOutput;
        return this.emit(':confirmSlot', slotToConfirm, speechOutput, repromptSpeech);
		}
		
		

		//Your custom intent handling goes here
		speechOutput1 = "Okay, I am requesting Apollo Pharmacy to call you back on priority. You ticket number is 45678. Take Care meanwhile!";
		this.emit(':ask', speechOutput1, speechOutput1);
	},	
	'Unhandled': function () {
        speechOutput = "The skill didn't quite understand what you wanted.  Do you want to try something else?";
        this.emit(':ask', speechOutput, speechOutput);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
	//this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
	let canonical;
    try{
		canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    console.log(err.message);
	    canonical = slot.value;
	};
	return canonical;
};

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
	  let updatedIntent= null;
	  // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer
	  
	  //this code is necessary if using ASK SDK versions prior to 1.0.9 
	  if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady', updatedIntent);
		
    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer
	  
	  //this code necessary is using ASK SDK versions prior to 1.0.9
		if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', null, null),
			shouldEndSession: false
		});
		this.emit(':responseReady');
		
    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}


function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
function isSlotValid(request, slotName){
        let slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        let slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    let alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    let returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}
