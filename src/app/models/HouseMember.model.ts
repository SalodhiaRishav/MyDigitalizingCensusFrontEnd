import {GenderType} from './enums/GenderType';
import {RelationToHeadType} from './enums/RelationToHeadType';
import {OccupationNatureType} from './enums/OccupationNatureType';
import {MaritalStatusType} from './enums/MaritalStatusType';
import {OccupationStatusType} from './enums/OccupationStatusType';





export class HouseMember{

    public  FirstName :string;

    
    public  LastName :string;

    
    public  RelationToHead :RelationToHeadType;

    
    public  Gender :GenderType;

    
    public  OccupationStatus :OccupationStatusType;

    
    public  DateOfBirth :Date;

    
    public  MaritalStatus :MaritalStatusType

    public AgeAtMarriage : number;

    
    public  OccupationNature :OccupationNatureType;

    
    public  VolunteerId :number;

    
    public  HouseId :number;


}