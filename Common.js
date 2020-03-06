/**
* Clasa Common
*/

/**
* Clasa abstracta Common implementeaza functionalitatea comuna tuturor
* claselor aplicatiei. Ea contine metodele de salvare, actualizare si
* stergere a datelor si defineste proprietatile comune acestora. Clasa 
* defineste alias-uri pentru functiile de selectie implementate in clasa
* Database. 
* Toate clasele aplicatiei vor extinde aceasta clasa.
*
* @package  	classes
* @author   	Alexandru Manta <alexandru.manta@hotmail.com>
* @version  	Version: 1.0
* @access   	public
*/

const config = require('./config/config');
const mysql = require('mysql');
const Database = require('./Database');

module.exports = class Common extends Database {
    static get properties() {
        return {
            table: {
                type: String
            },
            id_field: {
                type: String
            },
            link: {
                type: String
            },
            db: {
                type: String
            }
        }
    }


    constructor() {
        super();
        this.id_field = 'id';
        this.link = new Database();
    }
    
    
    select() {
        this.link.table(this.table);
        return this.link.select();
	}
    
}