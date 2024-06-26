import { NodejsFunction, NodejsFunctionProps } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { Duration } from "aws-cdk-lib";
import { ServiceInterface } from "./serviceInterface";

interface ServiceProps {
  bucket: string;
}

export class ServiceStack extends Construct {
  public readonly services: ServiceInterface
  constructor(scope: Construct, id: string, props: ServiceProps) {
    super(scope, id);

    const funProps: NodejsFunctionProps = {
      bundling: {
        externalModules: ["aws-sdk"],
      },
      environment: {
        BUCKET_NAME: props.bucket,
      },
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(10),
    };

    this.services = {
      createProduct: this.createHandlers(funProps, "createProduct"),
      editProduct: this.createHandlers(funProps, "editProduct"),
      deleteProduct: this.createHandlers(funProps, "deleteProduct"),
      getProduct: this.createHandlers(funProps, "getProduct"),
      getProducts: this.createHandlers(funProps, "getProducts"),
      getSellerProducts: this.createHandlers(funProps, "getSellerProducts"),

      createCategory: this.createHandlers(funProps, "createCategory"),
      editCategory: this.createHandlers(funProps, "editCategory"),
      deleteCategory: this.createHandlers(funProps, "deleteCategory"),
      getCategory: this.createHandlers(funProps, "getCategory"),
      getCategories: this.createHandlers(funProps, "getCategories"),

      createDeals: this.createHandlers(funProps, "createDeals"),

      imageUploader: this.createHandlers(funProps, "imageUploader"),
      messageQueueHandler: this.createHandlers(funProps, "messageQueueHandler"),
    };
  }

  createHandlers(props: NodejsFunctionProps, handler: string): NodejsFunction {
    return new NodejsFunction(this, handler, {
      entry: join(__dirname, "/../src/handlers/index.ts"),
      handler: handler,
      ...props,
    });
  }
}