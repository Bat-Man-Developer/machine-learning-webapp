<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Forest Classifier</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <header>
      <h1>Random Forest Classifier</h1>
    </header>
    <main>
      <h1>Model Performance</h1>
      <div class="container">
        <div class="result-container">
          <h2>Model Accuracy</h2>
          <p>Both True Positive & True Negative Rates</p>
          <p class="responseValue"><span id="responseAccuracy"></span></p>
        </div>
        <div class="result-container">
          <h2>Model Precision</h2>
          <p>Correctly Identified Positive Instances</p>
          <p class="responseValue"><span id="responsePrecision"></span></p>
        </div>
        <div class="result-container">
          <h2>Model F1-Score</h2>
          <p>Mean of Precision & True Positive Rate</p>
          <p class="responseValue"><span id="responseF1score"></span></p>
        </div>
        <div class="result-container">
          <h2>Model AUC-ROC Curve</h2>
          <p>Plot of the True Positive Rate against the False Positive Rate</p>
          <p class="responseValue"><span id="responseAUCROC"></span></p>
        </div>
        <div class="result-container">
          <h2>Model True Positive Rate</h2>
          <p>Correctly Identified Positive Instances</p>
          <p class="responseValue"><span id="responseTPR"></span></p>
        </div>
        <div class="result-container">
          <h2>Model True Negative Rate</h2>
          <p>Correctly Identified Negative Instances</p>
          <p class="responseValue"><span id="responseTNR"></span></p>
        </div>
        <div class="result-container">
          <h2>Model False Positive Rate</h2>
          <p>Instances Incorrectly identified as Positive</p>
          <p class="responseValue"><span id="responseFPR"></span></p>
        </div>
        <div class="result-container">
          <h2>Model False Negative Rate</h2>
          <p>Instances Incorrectly Identified as Negative</p>
          <p class="responseValue"><span id="responseFNR"></span></p>
        </div>
      </div>
    </main>
    <script src="js/app.js"></script>
  </body>
</html>