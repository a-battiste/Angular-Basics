function sayHello(person: string): string {
    return "Hello, " + person;
}

    var user = "Super Student";
    document.getElementById("id1").innerHTML = sayHello(user);

    interface PersonOptions {
        first_name: string;
        last_name: string;
        age?: number;
        phone_number?: string;
        state?: string;
        zip_code?: number;
        occupation?: string;
        hourlyWage?: number;
        certifications?: any;
    }

    class Person implements PersonOptions {
        first_name: string;
        last_name: string;
        age: number;
        phone_number: string;
        state: string;
        zip_code: number;
        occupation: string;
        hourlyWage: number;
        certifications: any;

        constructor(first_name, last_name, age, phone_number, state, zip_code, occupation, hourlyWage) {
            this.first_name = first_name;
            this.last_name = last_name;
            this.age = age;
            this.phone_number = phone_number;
            this.state = state;
            this.zip_code = zip_code;
            this.occupation = occupation;
            this.hourlyWage = hourlyWage;
            this.certifications = this.certifications;
        }

        getFullName() {
            var fullName: string = this.first_name + " " + this.last_name;
            return fullName;
        }

        getWorkNumber() {
            return "I work as a " + this.occupation + " and you can reach me at " + this.phone_number;
        }

        getLocation() {
            var location: string = "I live in " + this.state;
            return location;
        }

        weeklyWage(hours?:number): any {
            var weeklyWage: number;
            if (hours!= undefined) {
                weeklyWage = hours * this.hourlyWage;
                return weeklyWage;
            }
            weeklyWage = this.hourlyWage * 40;
            return this.first_name + " works " + weeklyWage + " hours per week";
        }

        // addCerts(certs: string): string[] {
        //     let string = certs;
        //     let totalCerts: string[] = string.split(",");
        //     return totalCerts; 
        // }

        addCerts(...certs: string[]): any {
            var addedCerts: string = certs.join(" ");
            return addedCerts;
          }

    }

    const aris = new Person("Aris", "Battiste", 26, "555-555-5555", "North Carolina", 28204, "student", 10);
    const nate = new Person("Nate", "Fikru", 27, "612-555-5555", "Minnesota", 55455, "Software Engineer", 30);

    document.getElementById("id2").innerHTML = aris.getFullName();
    document.getElementById("id3").innerHTML = nate.getLocation();
    document.getElementById("id4").innerHTML = aris.weeklyWage();
    document.getElementById("id5").innerHTML = nate.addCerts('MBA', 'BS', 'freeCodeCamp');

