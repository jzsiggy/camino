const express = require('express');

const router = express.Router();

const { receiveSubmission } = require('../controller/receiveSubmission');
const { fetchPublicDataByPlaybookId } = require('../controller/fetchPublicDataByPlaybookId');
const { createPlaybook } = require('../controller/createPlaybook');

router.post('/submission',                 receiveSubmission);
router.post('/create-playbook',            createPlaybook);
router.get ('/public-data/:playbook_name', fetchPublicDataByPlaybookId);

module.exports = {
    router
}