<template>
  <b-row>
    <b-col lg="4">
      <patient-table></patient-table>
    </b-col>
    <b-col lg="8">
      <check-table></check-table>
    </b-col>
  </b-row>
</template>

<script>
    import PatientTable from "./component/PatientTable";
    import CheckTable from "./component/CheckTable";
    export default {
      name: "Check",
      components: {CheckTable, PatientTable}
    }
</script>

<style scoped>

</style>
