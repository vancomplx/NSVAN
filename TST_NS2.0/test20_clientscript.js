/**
 *@NApiVersion 2.x
 *@NScriptType ClientScript
 *@NScriptName client_script_demo

 this is a change
 this is a change for the master
 */
define(['N/record'],
    function(record) {
        function alertPageLoaded(context) {
            alert('Page is loaded');
        };
        function fieldChanged(context) {
            var currentRecord = context.currentRecord;
            auditRecordChanges(currentRecord.type, currentRecord.id);
            updateMemoFieldWhenItemFieldIsChanged(context);
        }
        function auditRecordChanges(type, id) {
            /*var logRecord = record.create({type: 'customrecord_log', isDynamic: true});
            logRecord.setValue('custrecord_recordType', type);
            logRecord.setValue('custrecord_recordId', id);
            logRecord.setValue('custrecord_changedDate', new Date());
            logRecord.save();*/
        }
        function updateMemoFieldWhenItemFieldIsChanged(context) {
            if(context.fieldId === 'item') {
                context.currentRecord.setValue('memo', 'item field is changed');
            }
        }
        return({
            pageInit: alertPageLoaded,
            fieldChanged: fieldChanged
        });
});
