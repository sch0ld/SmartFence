
// For debugging purposes!
APIOpen = true;


// Change this to URL/IP to where the included API is hosted, or create your own API and connect to that.
const APIURL = 'http://localhost/new/SmartFence/';



// This is called whenever a user clicks a gate button on the webpage to CLOSE/OPEN a gate.
function SendCommandToServer(gateNr, command)
    {
        var theUrl = APIURL + 'api?gate='+ gateNr + '&cmd=' + command; // Sets the correct command to retrieve the info we need to open or close a gate based on the choice of action.
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        if (APIOpen) {
            xmlHttp.send(); // Opens/Closes the gate through the API by sending a HTTP-GET-Request to it with the necessary details aslong the APIOPen variable is True
            //console.log(xmlHttp.responseText);
            return xmlHttp.responseText; // Retreives the status of the chosen gate
        }
        
    }

// This is called whenever a user is connected to website to try to establish a connection to the API URL above.
function TestConnectionToAPI()
    {
        const theUrl = APIURL + 'api?gate=0&cmd=status'; // Sets the correct command to retrieve the info we need to decide if the API is connected to or not.
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        if (APIOpen) { //  Gets the status of Gate0 through the API by sending a HTTP-GET-Request to it with the necessary details aslong the APIOPen variable is True
            xmlHttp.send();
            //console.log(xmlHttp.responseText);
            return xmlHttp.status; // Retrieves the status of the API
            
        }
        
    }