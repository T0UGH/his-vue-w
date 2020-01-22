<template>
  <b-row>
    <b-col lg="4">
      <patient-table></patient-table>
    </b-col>
    <b-col lg="8">
      <patient-cost-table></patient-cost-table>
    </b-col>
  </b-row>
</template>

<script>
    import PatientTable from "./component/PatientTable";
    import PatientCostTable from "./component/PatientCostTable";
    export default {
        name: "PatientCost",
      components: {PatientCostTable, PatientTable}
    }
</script>

<style scoped>

</style>
