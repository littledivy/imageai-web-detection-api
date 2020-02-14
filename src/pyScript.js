module.exports.code = (arg) => { 
return `from imageai.Detection import ObjectDetection
import os

execution_path = os.getcwd()

detector = ObjectDetection()
detector.setModelTypeAsRetinaNet()
detector.setModelPath( os.path.join(execution_path , 'models/resnet50_coco_best_v2.0.1.h5'))
detector.loadModel()
detections = detector.detectObjectsFromImage(input_image=os.path.join(execution_path , 'input/${arg.split('/')[1]}'), output_image_path=os.path.join(execution_path , 'output/${arg.split('/')[1]}'))

for eachObject in detections:
    print(eachObject['name'] , ' : ' , eachObject['percentage_probability'] )
`;
};
