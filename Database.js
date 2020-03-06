/**
* Clasa Database
*/

/**
* Clasa Database realizeaza conexiunea cu baza de date si implemeteaza
* functii specifice interactiunii intre NodeJS si baza de date
*
* Clasa Database implementeaza functionalitatile de executie si 
* inregistrare a interogarilor. Clasa ofera atat posibilitatea 
* de a rula o interogare particulara pentru cele mai frecvente 
* interogari de selectie a datelor
* Interfata Fluent va fi folosita de clasele specifice aplicatiei
*
* @package  	classes
* @author   	Alexandru Manta <alexandru.manta@hotmail.com>
* @version  	Version: 1.0
* @access   	public
*/

const config = require('./config/config');
const mysql = require('mysql');

module.exports = class Database {
    
    constructor() {

        /**
         * Conexiunea cu baza de date
         *
         * @var      mysql
         * @access   private
         **/

        this.link;
        this.table;

        /**
         * Creeaza conexiunea cu baza de date
         * si returneaza variabila de conexiune
         *
         * @return   mysql connection
         * @access   public
         */
        
        this.link = mysql.createPool({
            host: config.DB.HOST,
            user: config.DB.USER,
            password: config.DB.PASSWORD,
            database: config.DB.DATABASE,
            socketPath: config.DB.SOCKETPATH,
            connectionLimit : 10,
            multipleStatements : true
        });

    }

    
    /**
    * Selectarea tabelei. Functia este folosita si in clasele specifice
    * aplicatiei ca o scurtatura. Ruleaza constructorul clasei Database pentru
    * a realiza conexiunea si reseteaza datele parsate interogarii si tipurile
    * acestora
    *
    * @param    string      Tabele din care se vor selecta datele
    * @return   Database object Obiectul creat din clasa Database
    * @access   public
    */
    
   table(table){

        if (typeof table === 'string' || table instanceof String) {
            // this.link.getConnection(function (err, conn) {
            //     if (err) throw err;

            //     conn.query("SHOW TABLES LIKE 'categories'", function(err, results){
            //         if (results != undefined){ 
                        
                        
                            
                        
            //         } else {
            //             throw err;
            //         }
        
            //     });
                
            // });

            
            this.table = table;
             //TODO: parse bind types
            return this.table;
          
            
        } else {
            console.log("Tabela inexistenta");
        } 
    }   

    /**
    * Pregateste interogarea SELECT pentru tabela selectata prin functia 
    * table()
    *
    * @return   Database object Obiectul creat din clasa Database
    * @access   public
    */
    
    select() {
        
        this.link.getConnection ((err, conn) => {
            if (err) throw err;

            conn.query("SELECT * FROM categories", ((err, result) => {
                if (err) throw err;
                //console.log(result);
            }));
        });
        return this.select;
    }
}