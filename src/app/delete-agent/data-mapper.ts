import { AgentModel_api } from '../Services/data-store/model/AgentContacts-api-Model';
import { AgentDetailsModel } from '../agency-details/agent-details-Model';

export class DataMapper {
    public toApiModel(model: AgentDetailsModel): AgentModel_api {
        let apiData = new AgentModel_api();
        apiData.contactId = model.contactId;
        apiData.name = model.name;
        apiData.producerId = model.producerId;
        apiData.title = model.title;
        apiData.email = model.email;
        apiData.phone = model.phone;
        apiData.mobile = model.mobile==undefined?" ":model.mobile;
        return apiData;
    }
}