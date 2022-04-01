//jQuery libraries
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

//initialize datatable
export const dataTable = () => {
    $(document).ready(function () {
        $('#tables').DataTable();
    })
}
