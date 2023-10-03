export function verifyForm(data) {
    var formReply={};

    for (const dataItem in data) {
        formReply = (data[dataItem] === 0 || data[dataItem] === "") ? 
                        {...formReply, [dataItem]: false} : 
                        {...formReply, [dataItem]: true}
    }
    

    return formReply
}