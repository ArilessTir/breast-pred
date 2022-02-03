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