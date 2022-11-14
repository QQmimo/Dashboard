import EntitiesEnum from "./Adapter/RequestAdapter/EntitiesEnum";
import RequestAdapter from "./Adapter/RequestAdapter/RequestAdapter";
import RequestApplication from "./Application/RequestApplication/RequestApplication";

let x = new RequestAdapter(new RequestApplication());
x.get(EntitiesEnum.Block).then(blocks => {
	console.log(blocks);
});
