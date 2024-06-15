import { NodejsFunction, NodejsFunctionProps } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { Duration } from "aws-cdk-lib";

interface ServiceProps {
  bucket: string;
}

export class ServiceStack extends Construct {
  public readonly productService: NodejsFunction
  public readonly categoryService: NodejsFunction
  public readonly dealsService: NodejsFunction
  public readonly imageService: NodejsFunction

  constructor(scope: Construct, id: string, props: ServiceProps) {
    super(scope, id);

    const nodeJsFunctionProps: NodejsFunctionProps = {
      bundling: {
        externalModules: [],
      },
      environment: {
        BUCKET_NAME: props.bucket,
      },
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(10),
    };

    this.productService = new NodejsFunction(this, "productLambda", {
      entry: join(__dirname, "/../src/product-api.ts"),
      ...nodeJsFunctionProps,
    })

    this.categoryService = new NodejsFunction(this, "categoryLambda", {
      entry: join(__dirname, "/../src/category-api.ts"),
      ...nodeJsFunctionProps,
    })

    this.dealsService = new NodejsFunction(this, "dealsLambda", {
      entry: join(__dirname, "/../src/deals-api.ts"),
      ...nodeJsFunctionProps,
    })

    this.imageService = new NodejsFunction(this, "imageUploadLambda", {
      entry: join(__dirname, "/../src/image-api.ts"),
      ...nodeJsFunctionProps,
    })
  }
}