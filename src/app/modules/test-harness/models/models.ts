
export interface ISaveRequest {
    TestId: string;
    Name: string;
    Class: number;
    IsCwr: boolean;
    Latitude: number;
    Longitude: number;
    CameraIds: number[];
    SampleImagesPath: string;
   // JointsTestCase: IJointBarTypeTestCaseSaveRequest[];
  }
  export interface IJointBarTypeTestCaseSaveRequest {
    JointType: string;
    NormalJointCount: number;
    Defects: IDefectTest[];
  }
  
  export interface IJointBarTypeTestCase {
    Id?: number;
    JointType: string;
    NormalJointCount: number;
    negativeTestCaseCount: number;
    Defects: IDefectTest[];
    modified?: boolean;
  }
  
  
  export interface IDefectTest {
    Id?: number;
    ParentId?: number;
    Name: string;
    Description: string;
    Priority: string;
    Code: string;
    Count?: number;
    IsCwr?: boolean;
    Class?: number;
  }
  
  export class SelectedJointTypeTestCases {
    CameraIds: number[];
    SampleImagesPath: string;
    JointsToTest: IJointBarTypeTestCase[];
    Code?: string;
  }
  
  export interface IClassType {
    ClassTypeId: string;
    Cwr: boolean;
  }
  export interface IJointTypeTestCaseGlobalSettings {
    Name: string;
    CameraIds: number[];
    SampleImagePath: string;
  }
  export interface IQueryJointBarTestCases {
    cwr: boolean;
    classType: number;
    Longitude: number;
    Latitude: number;
  }
  
  export interface ILatLong {
  classType: number;
  cwr: boolean;
    latitude?: number;
    longitude?: number;
  }
  
  export const testCases = [
    {
      JointType: "InsulatedJointBar",
      Defects: [
        {
          Name: "FRA121(de)MissingBolt",
          Description: "Defect 2.0 FRA 121(d/e)",
          Priority: "Red",
          Code: "BNSF.0121 Missing Bolt Insulated Joint"
        }
      ]
    },
    {
      JointType: "BarredRailJointBar",
      Defects: [
        {
          Name: "FRA113(a)BoltsInInner",
          Description: "Defect 5.0 FRA 113(a)",
          Priority: "Red",
          Code: "0113A < 1 bolt per rail"
        },
        {
          Name: "FRA113(a)ZeroBolts",
          Description: "Defect 5.0 FRA 113(a)",
          Priority: "Red",
          Code: "0113A < 1 bolt per rail"
        }
      ]
    },
    {
      JointType: "WithDiscontinuityRailJointBar",
      Defects: [
        {
          Name: "FRA121(e)LessThanTwoBoltsPerSide",
          Description: "Defect 1.0 FRA 121(e)",
          Priority: "Red",
          Code: "0121E < 2 bolts per rail (cwr)"
        }
      ],
      IsCwr: true
    },
    {
      JointType: "WithDiscontinuityRailJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 7.0 FRA 121(d1)",
          Priority: "Red",
          Code: "0121D1 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 2
    },
    {
      JointType: "WithDiscontinuityRailJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 7.0 FRA 121(d1)",
          Priority: "Red",
          Code: "0121D1 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 3
    },
    {
      JointType: "WithDiscontinuityRailJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 7.0 FRA 121(d1)",
          Priority: "Red",
          Code: "0121D1 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 4
    },
    {
      JointType: "WithDiscontinuityRailJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 7.0 FRA 121(d1)",
          Priority: "Red",
          Code: "0121D1 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 5
    },
    {
      JointType: "WithDiscontinuityRailJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 8.0 FRA 121(d2)",
          Priority: "Red",
          Code: "0121D2 < 1 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 1
    },
    {
      JointType: "WithDiscontinuityRailJointBar",
      Defects: [
        {
          Name: "FRA121(d1)OnlyOneBolt",
          Description: "Defect 8.0 FRA 121(d2)",
          Priority: "Yellow",
          Code: "BNSF.0121D2 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 1
    },
    {
      JointType: "RetiredInsulatedJointBar",
      Defects: [
        {
          Name: "RetiredIjYellowDefect",
          Description: "Defect 4.0 121(d/e)",
          Priority: "Yellow",
          Code: "BNSF.0121 Retired Insulated Joint"
        }
      ]
    },
    {
      JointType: "RetiredInsulatedJointBar",
      Defects: [
        {
          Name: "FRA121(e)LessThanTwoBoltsPerSide",
          Description: "Defect 1.0 FRA 121(e)",
          Priority: "Red",
          Code: "0121E < 2 bolts per rail (cwr)"
        }
      ],
      IsCwr: true
    },
    {
      JointType: "RetiredInsulatedJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 7.0 FRA 121(d1)",
          Priority: "Red",
          Code: "0121D1 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 2
    },
    {
      JointType: "RetiredInsulatedJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 7.0 FRA 121(d1)",
          Priority: "Red",
          Code: "0121D1 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 3
    },
    {
      JointType: "RetiredInsulatedJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 7.0 FRA 121(d1)",
          Priority: "Red",
          Code: "0121D1 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 4
    },
    {
      JointType: "RetiredInsulatedJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 7.0 FRA 121(d1)",
          Priority: "Red",
          Code: "0121D1 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 5
    },
    {
      JointType: "RetiredInsulatedJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 7.0 FRA 121(d1)",
          Priority: "Red",
          Code: "0121D1 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 5
    },
    {
      JointType: "RetiredInsulatedJointBar",
      Defects: [
        {
          Name: "FRA121(d1)LessThanTwoBoltsPerSide",
          Description: "Defect 8.0 FRA 121(d2)",
          Priority: "Red",
          Code: "0121D2 < 1 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 1
    },
    {
      JointType: "RetiredInsulatedJointBar",
      Defects: [
        {
          Name: "FRA121(d1)OnlyOneBolt",
          Description: "Defect 8.0 FRA 121(d2)",
          Priority: "Yellow",
          Code: "BNSF.0121D2 < 2 bolts per rail (jointed)"
        }
      ],
      IsCwr: false,
      Class: 1
    }
  ];