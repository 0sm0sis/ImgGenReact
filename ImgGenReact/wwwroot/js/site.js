// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// TODO: Delete this ish after testing
//CLientID
//725473286437-l8unt3s7771cureq03kr0cfpl2s4p9gj.apps.googleusercontent.com

//Secret
//3CAsm8dIy8gs3L9E6W-k3GBm

import { GoogleSpreadsheet } from "google-spreadsheet";


// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appendSpreadsheet = async (row) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(row);
    } catch (e) {
        console.error('Error: ', e);
    }
};

const newRow = { Name: "new name", Value: "new value" };

appendSpreadsheet(newRow);
