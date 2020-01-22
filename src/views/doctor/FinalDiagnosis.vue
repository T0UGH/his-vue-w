<template>
  <b-row>
    <b-col lg="4">
      <patient-table></patient-table>
    </b-col>
    <b-col lg="8">
      <final-diagnosis-table></final-diagnosis-table>
    </b-col>
  </b-row>
</template>

<script>
  import PatientTable from "./component/PatientTable";
  import DiagnosisTable from "./component/DiagnosisTable";
  import FinalDiagnosisTable from "./component/FinalDianosisTable";
  export default {
    name: "FinalDiagnosis",
    components: {FinalDiagnosisTable, PatientTable}
  }
</script>
