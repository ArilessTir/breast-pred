from  sklearn.preprocessing import MinMaxScaler
from sklearn.compose import ColumnTransformer
import Config

preprocessor = ColumnTransformer(
    [
        ('Scaler', MinMaxScaler(),Config.NORMALIZE),
        ('drop_feature','drop',Config.REMOVE),
    ]
)