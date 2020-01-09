import { AgentModel_api } from '../Services/data-store/model/AgentContacts-api-Model';
import { FormGroupName, FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';

export class AgentApiMapper{
    public toAgentapiModel(form:FormGroup): AgentModel_api{
        let agent = new AgentModel_api();
        if(form.controls!=undefined){
            agent.name = form.controls.name.value;
            agent.producerId = form.controls.producerId.value;
            agent.title = form.controls.title.value;
            agent.email = form.controls.email.value;
            agent.phone = form.controls.phone.value;
            agent.mobile = form.controls.mobile.value==undefined?"":form.controls.mobile.value;
            agent.contactId = form.controls.contactId.value;
        }
        return agent;
    }
}