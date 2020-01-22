<template>
  <b-row>
    <b-col lg="4">
      <patient-table></patient-table>
    </b-col>
    <b-col lg="8">
      <treatment-table></treatment-table>
    </b-col>
  </b-row>
</template>

<script>
    import PatientTable from "./component/PatientTable";
    import TreatmentTable from "./component/TreatmentTable";
    export default {
        name: "Treatment",
      components: {TreatmentTable, PatientTable}
    }
</script>

<style scoped>

</style>
