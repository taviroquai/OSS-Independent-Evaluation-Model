
# An Independent Evaluation Model for Open-source Software

NOTE: THIS IS A WORK IN PROGRESS  

## Abstract

This paper purpose is to describe an independent model to evaluate open-source software including it’s project, using pragmatic and independent methods and tests. It is constituted by two main approaches, the objective and subjective. The model described here aims to provide a quantitative overview of the software and it’s project quality to help in decision-making.

## 1. Approaches, Methods and Tests Overview

Evaluation approaches are conceptually distinct ways of thinking about, designing, and conducting evaluation efforts.[6]

In this paper, it will be considered two main approaches for evaluating software and it’s projects quality: Objective Approach and Subjective Approach. The evaluations results are only valid if the tests listed below are run by at least two independent entities.

Considering software as an object, and a set of services that aims to solve problems, it can be evaluated objectively, based on software quality principles[7].

When considering subjective evaluation approaches, it is important to use independent entities and blind checks reviews to eliminate bias and validate evaluation transparency and credibility[5].

This model also uses a strong emphasis on Occam's razor by intersecting the results obtained on the several tests. For example, if the condition S4R > (S2R + S3R) is true, currently the project can be described as a hype.

### 1.1 Objective Approach

Constitutes a set of objective methods / tests for evaluating the software and it’s project. Each of the following methods will be extensively described below. An Objective Method / Test is identified by starting with “O” following by a number.

 - **O1**: Software Quality Assurance Metrics - a set of software qualities evaluation results  
 - **O2**: Data Usage Contexts - evaluates the functional areas where the software can be used to manipulate the data.  
 - **O3**: Interoperability: evaluates the software capabilities to communicate / integrate with other software  
 - **O4**: Dependencies: evaluates how much dependent the software is  
 - **O5**: Software License - evaluation of the the licensing terms in respect of open-source freedoms/restrictions, incluing source code forkability.  

### 1.2 Subjective Approach

Constitutes a set of methods / tests in which the object under study cannot be mathematically calculated. Each of the following methods will be extensively described below. A Subjective Method / Test is identified by starting with “S” followed by a number.

 - **S1**: Software Documentation: evaluation of the software user manual, API reference, examples and tutorials, in text, video or other formats.  
 - **S2**: Blind User Experience - a set of independent user experiments evaluation using the software  
 - **S3**: Blind Connoisseur - an independent review by an high qualified person in the technologies used by the software  
 - **S4**: Opinion Polling - evaluation of the project members and project’s comunity  
 - **S5**: Accreditation - an evaluation of the project’s credits given by official organizations.  

### 1.3 Tests Results

Each evaluation test has a relative variable result. It can be identified starting with the test identifier followed by the letter R, ie. O1R.

For easy calculation, it is recommended that each variable should be an integer between 0 and 9, and having POINTS as units.

### 1.4 Weighting
Each evaluation test has a relative and constant weighting. 
Weightings are identified starting with it’s relative test identifier, followed by letter P, ie. S1P.

A priori, an equal weighting among all evaluation tests should give the most balanced results. The more differences in exists amoung wightings, the more unbalanced the results will be.

It is recomended that a weighting value must be a constant and integer. Also the sum of all weightings should be 100. The  weighting units are POINTS.

## 2. Formula
```
Result = [O1R ... ONR] + [S1R ... SNR] = [O1 * O1P ... ON * ONP] + [S1 * S1P ... SN * SNP]
```

### 2.1 Example
Minimum of 0 points;  
Maximum of 901 points;  
```
O1 = 5; O2 = 4; O3 = 3; O4 = 2; O5 = 1;  
S1 = 2; S2 = 3; S3 = 4; S4 = 5; S5 = 6;  
O1P = 11; O2P = 11; O3P = 11; O4P = 11; O5P = 11;  
S1P = 11; S2P = 11; S3P = 11; S4P = 11; S5P = 12;  
Result = 5x11 + 4x11 + 3x11 + 2x11 + 1x11 + 2x11 + 3x11 + 4x11 + 5x11 + 6x12  
Result = 391 points  
```

## 3. Evaluation Exclusion Criteria
A list of defined exclusion criteria should be published together with weightings.

### 3.1 Example

```
O1R x O1P < 50
```

## 4. Usage
In favor of transparency of the evaluation process, the evaluation is valid if the following items are publish along with the evaluation process:  
 - The evaluation model (this)  
 - The evaluation formula  
 - The evaluation weightings  
 - The list of exclusion criterias  
 - The name of the independent entities that will run the methods  
 - The results of each test  
 - The final result  

## O1 - Software Quality Assurance Metrics
This method aims to reveal the software quality in general. All tests should be run by an independant third-party. The following known metrics should be evaluated.

 - Reliability / Stability - Run tests that can break the application at run-time, that affect users expectations or companies business, as of: introduce changes to the source code; large user input; introduce changes in data storage, etc...  
 - Efficiency - The source code and software architecture attributes that ensure high performance once the application is in run-time mode. The measurements of time and space required of the software operations / services.  
 - Security - A measure of the likelihood of potential security breaches due to poor coding practices and architecture. This quantifies the risk of encountering critical vulnerabilities that compromises important information.  
 - Maintainability - Measures source-code size, forkability, documentation, and other factors that turns hard to make improvements or apply corrections to the source-code.  
 - Portability - Measures in which enviroments the software can be executed.  
 - Usability - Measures the software interface usage against users of different cultures, education level and handycaped.  

## O2 - Data Usage Contexts
This method aims to reveal the total of contexts the software can be used.

 - Publishing - Evaluates the number of the operations available to publish the data;  
 - Management - Evaluates the number of the operations available to organize and manage the data;  
 - Analysis - Evaluates the number of the operations available to analyse and obtain analysis reports of the data;  
 - Transformational - Evaluates the number of the operations available that can transform the data;  
 - Entertainment - Evaluates the number of the operations available that serves the data as entertaiment.  


## O3 - Interoperability
This test aims to reveal the total operations that can be used by third-party software. It measures the software capabilities for communicating and integrating with other software. It can also take into account how many changes the software has suffer to communicate / integrate with other software.

## O4 - Dependencies
This test aims to reveal the total of the software dependencies to run. For each depency, should be considered a new overall evaluation.

## O5 - Software License
This test aims to reveal the total of freedoms and restrictions that are inherent to the license policy.

## S1 - Software Documentation
This method aims to reveal the quality and quantity of the software documentation for software users.

## S2 - Blind User Experience
This method aims to reveal usability problems, but also, reveals independent acceptance of the software usage, which is very important to reduce human bias and reputation influencies. Must be used with S1. Evaluates individual user experience with the software. The user must know nothing about the software creators, distribution trademarks or any signs that invalidates the blind experience. Best results are obtained with larger user sample.

## S3 - Blind Connoisseur Peer Review
This method aims to reveal hidden potential of the software, that is not known by normal users. Submit the software to peer review to a specialized user with high knowledge of the technologies used by the software. Also as in S2, these specialized user must know nothing about the software creator, distributor, trademarks or any sigh that invalidates the blind experience. Aquired the resulting review.

## S4 - Public Opinion
This method aims to reveal how much evolved the project is on the social area. Use independent entities to measure project comunity and it’s activity. Evaluate the total number of project members and comunity members.

## S5 - Accreditation
This method aims to reveal how much credits the project has received from official organizations. Evaluate the total number of official organizations.

## 5. Keywords

Project - a collaborative enterprise, involving research or design, that is carefully planned to achieve a particular aim[1], including the social and marketing related areas.  

Software - is that part of a computer system that consists of encoded information or computer instructions[2], aimed to resolve a set of problems described in it’s Project.  

Open Source Software - computer software with its source code made available with a license in which the copyright holder provides the rights to study, change, and distribute the software to anyone and for any purpose[3].  

Evaluation Model -  is the process of judging something or someone based on a set of standards[4]. It is also a set of evaluation methods and technics to measure the object in study.  

## 6. References 

TODO - Replace some wikipedia references  

[1] Wikipedia (2016) - https://en.wikipedia.org/wiki/Project  
[2] Wikipedia (2016)- https://en.wikipedia.org/wiki/Software  
[3]  St. Laurent, Andrew M. (2008). Understanding Open Source and Free Software Licensing. O'Reilly Media. p. 4. ISBN 9780596553951.  
[4] Wikipedia (2016) - https://en.wikipedia.org/wiki/Evaluation_(disambiguation)  
[5] https://www.elsevier.com/reviewers/what-is-peer-review  
[6] Wikipedia (2016) - https://en.wikipedia.org/wiki/Evaluation_approaches  
[7] Wikipedia (2016) - https://en.wikipedia.org/wiki/Software_quality  
