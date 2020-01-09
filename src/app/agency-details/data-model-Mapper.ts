import { AgentDetailsModel } from './agent-details-Model';
import { AgentModel_api } from '../Services/data-store/model/AgentContacts-api-Model';

export class DataModelMapper{
    public toDataModel(data : AgentModel_api[]  ) : AgentDetailsModel[]{
        
        let agentData   : AgentDetailsModel[]=[];
       data.forEach(res=>{
        let agent = new AgentDetailsModel();
        agent.name = res.name;
        agent.phone = res.phone;
        agent.email = res.email;
        agent.title = res.title;
       agent.contactId = res.contactId
        agent.producerId= res.idCode
        var add = [res.address1,res.city,res.state,res.country,res.postalCode]
        agent.address1 = this.appendAddress(add);
        agentData.push(agent)
       })
        return agentData;
    }
    private appendAddress(address : string[]): string{
        var returnAddress = ''
        address.forEach(element=>{
            if(element!=null){
                returnAddress =returnAddress+' '+ element+','
            }
        })
        return returnAddress.substr(0,returnAddress.length-1);
    }
}