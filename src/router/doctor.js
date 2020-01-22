// Containers
const DefaultContainer = () => import('../containers/DefaultContainer');

//Doctors
const RecordHome = () => import('../views/doctor/RecordHome');
const FirstDiagnosis = () => import('../views/doctor/FirstDiagnosis');
const FinalDiagnosis = () => import('../views/doctor/FinalDiagnosis');
const Check = () => import('../views/doctor/Check');
const Treatment = () => import('../views/doctor/Treatment');
const PatientCost = () => import('../views/doctor/PatientCost');
const Prescription = () => import('../views/doctor/Prescription');

export default {
  path:'/doctor',
  redirect:'/doctor/recordHome',
  name:'Doctor',
  component: DefaultContainer,
  children: [
    {
      path: 'recordHome',
      name: 'recordHome',
      component: RecordHome
    },
    {
      path: 'firstDiagnosis',
      name: 'firstDiagnosis',
      component: FirstDiagnosis
    },
    {
      path: 'finalDiagnosis',
      name: 'finalDiagnosis',
      component: FinalDiagnosis
    },
    {
      path: 'check',
      name: 'check',
      component: Check
    },
    {
      path: 'treatment',
      name: 'treatment',
      component: Treatment
    },
    {
      path: 'patientCost',
      name: 'patientCost',
      component: PatientCost
    },
    {
      path: 'prescription',
      name: 'prescription',
      component: Prescription
    },
  ]
}
