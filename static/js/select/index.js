import "./css/select2.css";

import Select2 from "./select2/core";

// module.exports = function(element, options){
// 	return new Select2(element, options);
// }

export default function(element, options){
	$(".dt-select").siblings(".select2-container").remove();
	return new Select2(element, options);
}