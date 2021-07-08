<template>
    <div id="Compo" >
    <el-button type="text" @click="dialogVisible = true">{{module.id}}</el-button>

    <el-dialog
    title="Tips"
    :visible.sync="dialogVisible"
    width="70%"
    :before-close="handleClose"
    >
    <!-- body -->
    <span>This is a message</span>
    <!-- foot -->
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
    </span>
    </el-dialog>
    </div>
</template>
<script>
 /* eslint-disable */
  export default {
    props :["module"],
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then((_) => {
            done();
          })
          .catch((_) => {});
      }
    }
  };
</script>