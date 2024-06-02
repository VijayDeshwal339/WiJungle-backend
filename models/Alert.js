const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  timestamp: String,
  flow_id: Number,
  in_iface: String,
  event_type: String,
  src_ip: String,
  src_port: Number,
  dest_ip: String,
  dest_port: Number,
  proto: String,
  ssh: {
    client: {
      proto_version: String,
      software_version: String,
    },
    server: {
      proto_version: String,
      software_version: String,
    },
  },
  alert: {
    action: String,
    gid: Number,
    signature_id: Number,
    rev: Number,
    signature: String,
    category: String,
    severity: Number,
  },
  payload: String,
  stream: Number,
});

const Alert = mongoose.model("Alert", alertSchema);
module.exports = Alert;
