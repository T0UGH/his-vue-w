<template>
  <b-row>
    <b-col lg="4">
      <patient-table></patient-table>
    </b-col>
    <b-col lg="8">
      <prescription-table></prescription-table>
    </b-col>
  </b-row>
</template>

<script>
    import PatientTable from "./component/PatientTable";
    import PrescriptionTable from "./component/PrescriptionTable";
    export default {
        name: "Prescription",
      components: {PrescriptionTable, PatientTable}
    }
</script>

<style scoped>

</style>
