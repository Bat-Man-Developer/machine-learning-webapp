// Functions to call Python script executor
function getAccuracy() {
    $.ajax({
        url: '../call_python/getAccuracy.php',
        method: 'GET',
        success: function(response) {
            $('#responseAccuracy').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error getting accuracy:', error);
        }
    });
}

function getPrecision() {
    $.ajax({
        url: '../call_python/getPrecision.php',
        method: 'GET',
        success: function(response) {
            $('#responsePrecision').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error getting precision:', error);
        }
    });
}

function getF1Score() {
    $.ajax({
        url: '../call_python/getF1score.php',
        method: 'GET',
        success: function(response) {
            $('#responseF1score').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error getting F1 score:', error);
        }
    });
}

function getAUCROC() {
    $.ajax({
        url: '../call_python/getAUCROC.php',
        method: 'GET',
        success: function(response) {
            $('#responseAUCROC').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error getting F1 score:', error);
        }
    });
}

function getTPR() {
    $.ajax({
        url: '../call_python/getTPR.php',
        method: 'GET',
        success: function(response) {
            $('#responseTPR').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error getting recall:', error);
        }
    });
}

function getTNR() {
    $.ajax({
        url: '../call_python/getTNR.php',
        method: 'GET',
        success: function(response) {
            $('#responseTNR').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error getting specificity:', error);
        }
    });
}

function getFPR() {
    $.ajax({
        url: '../call_python/getFPR.php',
        method: 'GET',
        success: function(response) {
            $('#responseFPR').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error getting false positive rate:', error);
        }
    });
}

function getFNR() {
    $.ajax({
        url: '../call_python/getFNR.php',
        method: 'GET',
        success: function(response) {
            $('#responseFNR').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error getting false negative rate:', error);
        }
    });
}

$(document).ready(function() {
    // Initial executions
    getAccuracy();
    getPrecision();
    getF1Score();
    getAUCROC();
    getTPR();
    getTNR();
    getFPR();
    getFNR();

    // Execute PHP code every 30 seconds
    setInterval(function() {
        getAccuracy();
        getPrecision();
        getF1Score();
        getAUCROC();
        getTPR();
        getTNR();
        getFPR();
        getFNR();
    }, 30000);
});