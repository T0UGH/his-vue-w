<template>
  <b-row>
    <b-col lg="4">
      <patient-table></patient-table>
    </b-col>
    <b-col lg="8">
      <diagnosis-table></diagnosis-table>
    </b-col>
  </b-row>
</template>

<script>
  import PatientTable from "./component/PatientTable";
  import DiagnosisTable from "./component/DiagnosisTable";
  export default {
    name: "FirstDiagnosis",
    components: {DiagnosisTable, PatientTable}
  }
</script>
