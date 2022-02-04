# Exploration Data Analysis

### Shape

    569 rows 
    32 columns

### Features

    30 floats
    1 int64 (id)
    1 object (diagnosis)

### NA 

    No NAN

### Target 

    diganosis with two modalities :

        M(Malignant) : 212 => 37%
        B(Benign) : 357 => 63%

    dataset not too much unbalanced  

### Features

    For some feature we can obeserve sensitves deferences bewteen B and M

    Perimetre_mean
    Area_mean
    Area_se => Var with big outlier
    Perimetre_se => Var With two big outlier
    Radius_Worst
    Perimetre_Worst
    Area_Worst

    Distribution: 
        Some features are skewed
            - log transformation ?
        I have to rescale all of them
            - Min max scaller ?

    Outlier:
            - Remove them ?
                - Inter Quartile Range ?
                - Standard Deviation Method ?
    

### Correlation 
    A lot of data are corelated

    radius_mean: {'perimeter_mean': 0.9978552814938113,
                    'area_mean': 0.9873571700566119,
                    'radius_worst': 0.9695389726112053,
                    'perimeter_worst': 0.9651365139559878,
                    'area_worst': 0.9410824595860459},

    texture_mean: {'texture_worst': 0.9120445888404215},

    perimeter_mean: {'radius_mean': 0.9978552814938113,
                     'area_mean': 0.9865068039913906,
                     'radius_worst': 0.9694763634663142,
                     'perimeter_worst': 0.9703868870426388,
                     'area_worst': 0.9415498080023057},

    area_mean: {'radius_mean': 0.9873571700566119,
                  'perimeter_mean': 0.9865068039913906,
                  'radius_worst': 0.9627460860470841,
                  'perimeter_worst': 0.959119574355266,
                    'area_worst': 0.9592133256499006},

    'concavity_mean': {'concave points_mean': 0.9213910263788594},

    'concave points_mean': {'concavity_mean': 0.9213910263788594,
                            'concave points_worst': 0.9101553142985934},

    'radius_se': {'perimeter_se': 0.9727936770160752,
                    'area_se': 0.95183011211099},

    'perimeter_se': {'radius_se': 0.9727936770160752,
                    'area_se': 0.9376554069544158},

    'area_se': {'radius_se': 0.95183011211099,
                'perimeter_se': 0.9376554069544158},

    'radius_worst': {'radius_mean': 0.9695389726112053,
                    'perimeter_mean': 0.9694763634663142,
                    'area_mean': 0.9627460860470841,
                    'perimeter_worst': 0.993707916102951,
                    'area_worst': 0.9840145644590724},

    'texture_worst': {'texture_mean': 0.9120445888404215},

    'perimeter_worst': {'radius_mean': 0.9651365139559878,
                        'perimeter_mean': 0.9703868870426388,
                        'area_mean': 0.959119574355266,
                        'radius_worst': 0.993707916102951,
                        'area_worst': 0.9775780914063881},
    
    'area_worst': {'radius_mean': 0.9410824595860459,
                    'perimeter_mean': 0.9415498080023057,
                    'area_mean': 0.9592133256499006,
                    'radius_worst': 0.9840145644590724,
                    'perimeter_worst': 0.9775780914063881},

    'concave points_worst': {'concave points_mean': 0.9101553142985934},
