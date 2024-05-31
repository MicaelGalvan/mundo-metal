// const cron = require('node-cron');
// const userService = require('../services/userService');

// const cleanupInactiveUsers = async () => {
//   try {
//     await userService.removeInactiveUsers();
//     console.log('Inactive users cleanup completed');
//   } catch (error) {
//     console.error('Error during inactive users cleanup:', error);
//   }
// };

// // Schedule the task to run every day at midnight
// cron.schedule('0 0 * * *', cleanupInactiveUsers);

// module.exports = cleanupInactiveUsers;
