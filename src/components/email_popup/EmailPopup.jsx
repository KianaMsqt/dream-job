import TextField from '@mui/material/FormControl';
import { Dialog } from '@mui/material';

function EmailPopup(){
    return (
        <Dialog
          title="Fill in Search Criteria"
          >
          <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); } }>
            This dialog spans the entire width of the screen.
            <TextField name="email" hintText="Email" />
            <TextField name="FirstName" type="Text" hintText="First Name" />
            <TextField name="LastName" type="Text" hintText="Last Name" />
            <TextField name="Title" type="Text" hintText="Job Title" />
            <TextField name="Location" type="Text" hintText="Location" />
            <TextField name="Salary" type="Number" hintText="Minimum Salary" />
          </form>
        </Dialog>
      );
}

export default EmailPopup;