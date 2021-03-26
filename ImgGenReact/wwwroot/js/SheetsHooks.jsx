////import useGoogleSheets from "use-google-sheets";

////const REACT_APP_GOOGLE_API_KEY = "AIzaSyA1so05LmmrBcFRO3pqTV42Dmvb2TCzvo4";
////const REACT_APP_GOOGLE_SHEETS_ID = "1zbEyIfga05-gXTCVGejJHpl8ZrlcTYanvgnQBa1t2DM";
////const App = () => {
////    const { data, loading, error } = useGoogleSheets({
////        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
////        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
////        sheetsNames: ['Sheet1'],
////    });

////    if (loading) {
////        return <div>Loading...</div>;
////    }

////    if (error) {
////        return <div>Error!</div>;
////    }

////    return <div>{JSON.stringify(data)}</div>;

////};

////class AppData extends React.Component {

////    render() {
////        const md = createRemarkable();
////        return (
////            <div className="AppData">
////                {this.App.stringify}
////            </div>
////        );
////    }
////}

////ReactDOM.render(<AppData data={App} />, document.getElementById('appdata'));
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

//appendSpreadsheet(newRow);