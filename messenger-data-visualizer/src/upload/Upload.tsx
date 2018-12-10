import * as React from 'react';
import {Form, FormGroup, FormText, Input, Label} from 'reactstrap';

class Upload extends React.Component {
  public render() {
    return (
        <Form>
            <FormGroup>
                <Label for="chat-data">File</Label>
                <Input type="file" name="file" id="chat-data" />
                <FormText color="muted">
                    Upload chat data in JSON format here
                </FormText>
            </FormGroup>
        </Form>
    );
  }
}

export default Upload;