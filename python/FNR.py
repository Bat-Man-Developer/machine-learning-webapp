import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix

# Load the dataset from the CSV file
data = pd.read_csv('../dataset/dataset.csv')

# Convert the 'Country' column to numeric values using LabelEncoder
le = LabelEncoder()
data['Country'] = le.fit_transform(data['Country'])

# Convert Salary column values to numeric values
data[' Salary'] = pd.to_numeric(data[' Salary'], errors='coerce')

# Fill in missing Salary values with the mean
data[' Salary'] = data[' Salary'].fillna(data[' Salary'].mean())

# Split the data into features and target
X = data[['Country', ' Age', ' Salary']]
y = data[' Purchased']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the Random Forest Classifier
rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)
rf_classifier.fit(X_train, y_train)

# Evaluate the model
y_pred = rf_classifier.predict(X_test)
tn, fp, fn, tp = confusion_matrix(y_test, y_pred).ravel()
false_negative_rate = fn / (fn + tp)

# Print the result
print("False Negative Rate:", false_negative_rate)