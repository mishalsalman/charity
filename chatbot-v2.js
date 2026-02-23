// chatbot-v2.js

class Chatbot {
    constructor() {
        this.context = {};
        this.responseDatabase = {};
        this.initResponseDatabase();
    }

    initResponseDatabase() {
        this.responseDatabase = {
            "greetings": [
                "Hello! How can I assist you today?",
                "Hi there! What can I help you with?" 
            ],
            "farewells": [
                "Goodbye! Have a great day!",
                "See you later!"
            ],
            "help": [
                "I am here to help you with any inquiries.",
                "Please let me know your questions!"
            ],
            "donations": [
                "Your donations help us continue our mission.",
                "Would you like to know how to donate?"
            ],
            "volunteering": [
                "Volunteering is a great way to help.",
                "Would you like to learn more about volunteering opportunities?"
            ],
            "events": [
                "We have various events happening this month.",
                "Would you like to know more about our upcoming events?"
            ],
            "contact": [
                "You can contact us via our website or social media.",
                "Let me know if you need our contact details!"
            ],
            "feedback": [
                "We appreciate your feedback! Please share your thoughts.",
                "Your input helps us improve."
            ],
            "partnerships": [
                "We are open to partnerships. Let's collaborate!",
                "Would you like to discuss partnership opportunities?"
            ],
            "impact": [
                "Your support has made a significant impact in our community.",
                "Let me share some stories of impact with you."
            ],
            // Add more categories as needed
        };
    }

    detectIntent(input) {
        // Simple intent detection logic based on keywords
        if (input.includes('hello') || input.includes('hi')) {
            return 'greetings';
        } else if (input.includes('bye')) {
            return 'farewells';
        } else if (input.includes('help')) {
            return 'help';
        } else if (input.includes('donate')) {
            return 'donations';
        } else if (input.includes('volunteer')) {
            return 'volunteering';
        } else if (input.includes('event')) {
            return 'events';
        } else if (input.includes('contact')) {
            return 'contact';
        } else if (input.includes('feedback')) {
            return 'feedback';
        } else if (input.includes('partnership')) {
            return 'partnerships';
        } else if (input.includes('impact')) {
            return 'impact';
        }
        return null;
    }

    getResponse(intent) {
        return this.responseDatabase[intent].sort(() => 0.5 - Math.random())[0];
    }

    chat(input) {
        const intent = this.detectIntent(input);
        if (intent) {
            return this.getResponse(intent);
        } else {
            return "I'm sorry, I don't understand your request.";
        }
    }
}

// Usage example:
const chatbot = new Chatbot();
console.log(chatbot.chat("Hello, I want to know about volunteering."));